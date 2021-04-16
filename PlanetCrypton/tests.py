from django.test import TestCase, Client
from django.test import SimpleTestCase
from django.urls import reverse, resolve 
import json
from .models import *
from .views import *
from django.conf import settings
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import RequestFactory
from django.contrib import auth



class TestUrls(SimpleTestCase):

    def test_home_url_is_resolved(self):
        url = reverse('index')
        self.assertEquals(resolve(url).func, index)

    def test_login_url_is_resolved(self):
        url = reverse('login')
        self.assertEquals(resolve(url).func, login_view)
    
    def test_register_url_is_resolved(self):
        url = reverse('register')
        self.assertEquals(resolve(url).func, register)

    def test_logout_url_is_resolved(self):
        url = reverse('logout')
        self.assertEquals(resolve(url).func, logout_view)

    def test_articles_url_is_resolved(self):
        url = reverse('articles')
        self.assertEquals(resolve(url).func, articles)   
    
    def test_crptoperf_url_is_resolved(self):
        url = reverse('crptoperf')
        self.assertEquals(resolve(url).func, crptoperf)

    def test_singlecrypto_url_is_resolved(self):
        url = reverse('singlecrypto', args=['acrypto'])
        self.assertEquals(resolve(url).func, singlecrypto)

    def test_blockchain_url_is_resolved(self):
        url = reverse('blockchain')
        self.assertEquals(resolve(url).func, blockchain)  

    def test_profile_url_is_resolved(self):
        url = reverse('profile', args=['aprofile'])
        self.assertEquals(resolve(url).func, profile)

    def test_follow_url_is_resolved(self):
        url = reverse('follow', args=['acrypto'])
        self.assertEquals(resolve(url).func, addcrypto)

    def test_unfollow_url_is_resolved(self):
        url = reverse('deletecrypto', args=['acrypto'])
        self.assertEquals(resolve(url).func, deletecrypto)   
    


class TestUserAndPassword(TestCase):

    def test_user_exists(self):
        user_a = User.objects.create(username="John", password="john")
        user_a.save()

        user_count = User.objects.all().count()
        self.assertEqual(user_count, 1)
        self.assertNotEqual(user_count, 0)
    
    def test_user_password(self):
        user_b = User.objects.create(username="Fred", password="fred")
        user_b.save()
        self.assertTrue(user_b.password == "fred")
 


class TestModels(TestCase):

    def test_followed_crypto(self):

        user_b = User.objects.create(username="Fred", password="fred")
        user_b.save()

        followed = FollowedCrypto()
        followed.user = user_b
        followed.cryptocurrency = "bitcoin"
        followed.save()

        record = FollowedCrypto.objects.get(id=1)
        self.assertEqual(record, followed)

    def test_profile_pic(self):

        user_b = User.objects.create(username="Fred", password="fred")
        user_b.save()


        profilepic = ProfilePic()
        profilepic.user = user_b
        profilepic.profile_pic = SimpleUploadedFile(name='test_image.jpg', content=open("/Users/michelangelo/Desktop/FP1/static/images/Jaguar.jpg", 'rb').read(), content_type='image/jpeg')
        profilepic.save()

        record = ProfilePic.objects.get(id=1)
        self.assertEqual(record, profilepic)
















