from django.contrib import admin

# Register your models here.

from .models import Note

admin.site.register(Note) # This line will make the Note model visible on the admin page.