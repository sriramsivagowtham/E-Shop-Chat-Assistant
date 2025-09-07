from django.db import models
from django.contrib.auth.forms import UserCreationForm
from django.db import models





class UserProfile(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255) 
    phone = models.IntegerField(max_length=10)

    def __str__(self):
        return self.username



class Post(models.Model):
    image = models.ImageField(upload_to="images/", blank=True, null=True )
    name = models.CharField( max_length=60)
    content = models.CharField(max_length=1000, null = True)
    price = models.IntegerField(null=True)
    quantity = models.IntegerField(null=True)
    from django.contrib.auth.models import User


    def __str__(self):
        return self.name
# class Post(models.Model):
#     image = models.ImageField(upload_to="images/", blank=True, null=True)
#     name = models.CharField(max_length=60)
#     content = models.CharField(max_length=100, null = True)
#     price = models.IntegerField(null=True)


#     def __str__(self):
#         return self.name
# class User(models.Model):
#     Name = models.CharField(max_length=50)
#     Email = models.EmailField(max_length=254, unique=True)
#     Password = models.CharField()
