"""nameCard URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import design.views

urlpatterns = [
    path('', design.views.design, name='design'),

    # http://abc.com/edit/13
    path('edit/<int:edit_id>', design.views.design, name='edit-design'),
    path('design/delete/<int:designId>/', design.views.delete, name='delete-design'), 
    path('search/', design.views.search, name='search'),
    path('print/', design.views.print, name='print'),
]
