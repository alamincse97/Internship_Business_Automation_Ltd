from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
 
from .models import User
 
 
def index(request):
    user_list = User.objects.order_by('id')
    context = {'user_list': user_list}
    return render(request, 'index.html', context)