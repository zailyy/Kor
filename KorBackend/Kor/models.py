import uuid
from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    snapchatProfileURL = models.CharField(max_length=50)
    instagramProfileURL = models.CharField(max_length=50)
    facebookProfileURL = models.CharField(max_length=50)
    linkedinProfileURL = models.CharField(max_length=50)
    korProfilePictureURL = models.CharField(max_length=50)
    qrCodeURL = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    uid = models.UUIDField(default=uuid.uuid4, editable=False)
    notes = models.CharField(max_length=200)
    def __str__(self):
        return self.first_name + " " + self.last_name + " = " + self.username + " (" + self.uid + ")."

class Connection(models.Model):
    me = models.ForeignKey(User, related_name="me", on_delete=models.CASCADE)
    otherUser = models.ForeignKey(User, related_name="otherUser", on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    uid = models.UUIDField(default=uuid.uuid4, editable=False)
    def __str__(self):
        return self.me.username + " is connected with " + self.otherUser.username
