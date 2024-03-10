from django.db import models

# Create your models here.

class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True) # auto_now=True means that the field will be automatically updated when the model is saved
    created = models.DateTimeField(auto_now_add=True) # auto_now_add=True means that the field will be automatically set when the model is first created

    def __str__(self):
        return self.body[:50]