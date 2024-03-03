from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from . import views


urlpatterns = [
    path('',views.home,name='home'),
    path('store_new_book/',views.store_books,name='storebook'),
    path('show_book/',views.show_books,name='show_books'),
    path('edit_book/<int:id>',views.edit_book,name='edit_book'), # edit_book/<int:id to capture int id
    path('delete_book/<int:id>',views.delete_book,name='delete_book'), # edit_book/<int:id to capture int id
    
]