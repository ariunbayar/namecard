from django.db import models

# Create your models here.
class Design(models.Model):
    name=models.CharField(max_length=250)
    lastname_attrs = models.CharField(max_length=250)
    firstname_attrs = models.CharField(max_length=250, null=True)
    phone_attrs = models.CharField(max_length=250, null=True)
    email_attrs = models.CharField(max_length=250, null=True)
    fax_attrs = models.CharField(max_length=250, null=True)
    position_attrs = models.CharField(max_length=250, null=True)
    #TODO python manage.py makemigrations
    #TODO python manage.py migrate
