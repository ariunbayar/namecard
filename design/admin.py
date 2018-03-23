from django.contrib import admin
from .models import Design

class DesignAdmin(admin.ModelAdmin):
    pass

admin.site.register(Design, DesignAdmin)
