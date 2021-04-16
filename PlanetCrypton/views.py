from django.shortcuts import render
import json
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator

from .models import *
from .forms import *



def index(request):
    
    if request.user.is_authenticated:
        user = request.user
        profilepic = ProfilePic.objects.filter(user=user).first()
        return render(request, "PlanetCrypton/index.html", {
            "profilepic":profilepic
            })
    else:
        return render(request, "PlanetCrypton/index.html", {})



def login_view(request):
    if request.method == "POST":

        #Attempt to sign user in
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)

         #Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
           return render(request, "PlanetCrypton/login.html", {
                "message": "Invalid email and/or password."
            })
    else:
        return render(request, "PlanetCrypton/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "PlanetCrypton/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError as e:
            print(e)
            return render(request, "PlanetCrypton/register.html", {
                "message": "Email address already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "PlanetCrypton/register.html")


@csrf_exempt
@login_required
def profile(request, username):
      
    form = AddPic(request.POST)
    user = request.user
    profilepic = ProfilePic.objects.filter(user=user).first()
    username = User.objects.filter(username=username).first()
    usr = username
    following = FollowedCrypto.objects.filter(user=user.id)
    cryptos = []
        
    for i in following:
        cryptos.append(i.cryptocurrency)


    return render(request, "PlanetCrypton/profile.html", {
        "following":following,
        "user": user,
        "usr" : username,
        "profilepic":profilepic,
        "crypto": cryptos,
        "form":form
        })


        
        
        
    
def articles(request):
    
    if request.user.is_authenticated:
        user = request.user
        profilepic = ProfilePic.objects.filter(user=user).first()
        
        return render(request,"PlanetCrypton/articles.html",{
        "profilepic":profilepic,
        })
    else:
        return render(request, "PlanetCrypton/articles.html", {})



def blockchain(request):

    if request.user.is_authenticated:
        user = request.user
        profilepic = ProfilePic.objects.filter(user=user).first()
        return render(request,"PlanetCrypton/blockchain.html",{
            "profilepic":profilepic,
        })
    else:
        return render(request, "PlanetCrypton/blockchain.html", {})

def crptoperf(request):

    if request.user.is_authenticated:
        user = request.user
        profilepic = ProfilePic.objects.filter(user=user).first()
        return render(request,"PlanetCrypton/crptoperf.html",{
            "profilepic":profilepic,
        })
    else:
        return render(request, "PlanetCrypton/crptoperf.html", {})

def singlecrypto(request, cryptoname):

    if request.user.is_authenticated:
        cryptoname = cryptoname
        user = request.user.id
        profilepic = ProfilePic.objects.filter(user=user).first()
        return render(request,"PlanetCrypton/singlecrypto.html",{
            "crypto":cryptoname,
            "profilepic":profilepic,
        })
    else:
        cryptoname = cryptoname
        return render(request,"PlanetCrypton/singlecrypto.html",{
            "crypto":cryptoname,
        })


def addcrypto(request, crypto):

    if request.method == "POST":
        user = request.user
        usercurr = User.objects.filter(username=user).first()
        userid = usercurr.id
        profilepic = ProfilePic.objects.filter(user=user).first()
        usr = request.user.username
        following = FollowedCrypto.objects.filter(user=user.id)
        profilepic = ProfilePic.objects.filter(user=user).first()
        cryptos = []
        form = AddPic(request.POST, request.FILES)

        
        for i in following:
            cryptos.append(i.cryptocurrency)

        if crypto not in cryptos:
            newfollow = FollowedCrypto.objects.create(user=user, cryptocurrency=crypto)
            
            return render(request,"PlanetCrypton/profile.html",{
            "following":following,
            "crypto": cryptos,
            "user": user,
            "usr" : userid,
            "profilepic":profilepic,
            "form":form
            })
        else:
             return render(request,"PlanetCrypton/profile.html",{
             "following":following,
             "crypto": cryptos,
             "user": user,
             "usr" : userid,
             "profilepic":profilepic,
             "form":form
             })

@csrf_exempt            
def deletecrypto(request, crypto):

        if request.method == "POST":
            user = request.user
            usercurr = User.objects.filter(username=user).first()
            userid = usercurr.id
            profilepic = ProfilePic.objects.filter(user=user).first()
            usr = request.user.username
            following = FollowedCrypto.objects.filter(user=user.id)
            cryptos = []
            form = AddPic(request.POST, request.FILES)
            
            for i in following:
                cryptos.append(i.cryptocurrency)

            if crypto in cryptos:
                newfollow = FollowedCrypto.objects.filter(user=user, cryptocurrency=crypto).delete()
                
                return render(request,"PlanetCrypton/profile.html",{
                "following":following,
                "crypto": cryptos,
                "user": user,
                "usr" : userid,
                "profilepic":profilepic,
                "form":form
            })
            else:
                return render(request,"PlanetCrypton/profile.html",{
                "following":following,
                "crypto": cryptos,
                "user": user,
                "usr" : userid,
                "profilepic":profilepic,
                "form":form
            })




@login_required
def followedcryptos(request):

    # Filter cryptos followed by the user
    followedcryptos = FollowedCrypto.objects.filter(
        user = request.user
    )

    # Return followed cryptos in reverse chronologial order
    followedcryptos = followedcryptos.order_by("id").all()
    return JsonResponse([crypto.serialize() for crypto in followedcryptos], safe=False)



def add_image(request, username):

    user = request.user
    profilepic = ProfilePic.objects.filter(user=user).first()
    username = User.objects.filter(username=username).first()
    usr = username
    following = FollowedCrypto.objects.filter(user=user.id)
    cryptos = [] 

    for i in following:
        cryptos.append(i.cryptocurrency)

    if request.method == "POST":
        user = request.user
        profilepic1 = ProfilePic.objects.filter(user=user).first()
        form = AddPic(request.POST, request.FILES)
        if form.is_valid():
            if profilepic1:
                delprofpic = profilepic1.delete()
                newpic = form.save(commit=False)
                newpic.user = user
                newpic.save()
                profilepicnew = ProfilePic.objects.filter(user=user).first()
                return render(request, "PlanetCrypton/profile.html", {
                "following":following,
                "user": user,
                "usr" : username,
                "profilepic":profilepicnew,
                "crypto": cryptos,
                "form":form
                })
            else:
                newpic = form.save(commit=False)
                newpic.user = user
                newpic.save()
                profilepicnew = ProfilePic.objects.filter(user=user).first()
                return render(request, "PlanetCrypton/profile.html", {
                "following":following,
                "user": user,
                "usr" : username,
                "profilepic":profilepicnew,
                "crypto": cryptos,
                "form":form
                })

            



    
