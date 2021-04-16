from django.forms import ModelForm
from .models import ProfilePic

class AddPic(ModelForm):
    class Meta:
        model = ProfilePic
        fields = ('profile_pic',)


