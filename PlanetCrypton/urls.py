from django.urls import path

from . import views

urlpatterns = [
    path("home", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("register", views.register, name="register"),
    path("logout", views.logout_view, name="logout"),
    path("articles", views.articles, name="articles"),
    path("crptoperf", views.crptoperf, name="crptoperf"),
    path("singlecrypto/<str:cryptoname>", views.singlecrypto, name="singlecrypto"),
    path("blockchain", views.blockchain, name="blockchain"),
    path("profile/<str:username>", views.profile, name="profile"),
    path("follow/<str:crypto>/", views.addcrypto, name="follow"),
    path("unfollow/<str:crypto>/", views.deletecrypto, name="deletecrypto"),
    path("addpic/<str:username>", views.add_image, name="addimage"),

       # API Routes
    path("allfollowedcryptos", views.followedcryptos, name="followedcryptos"),
    
]