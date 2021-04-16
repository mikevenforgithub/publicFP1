from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class ProfilePic(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    profile_pic = models.ImageField(null=True, blank=True, upload_to='static/images')

    def serialize(self):
        return {
            "user":self.user
        }

class FollowedCrypto(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    cryptocurrency = models.CharField( max_length=50)

    def serialize(self):
        return {
            "id": self.id,
            "user":self.user.username,
            "crypto": self.cryptocurrency
        }