from django.db import models
 
# Create your models here.
class User(models.Model):
    id = models.IntegerField()
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    phone = models.IntegerField(max_length=10)
     
    class Meta:  
        db_table = "user"
        app_label = ''
     
    def __str__(self):
        return self