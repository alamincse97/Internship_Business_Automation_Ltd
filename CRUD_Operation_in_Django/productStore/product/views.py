from django.http import HttpResponse
from django.shortcuts import render,redirect
from book.forms import BookStoreFrom
from book.models import BookStoreModel
from django.contrib import messages


# Create your views here.

def home(request):
    return render(request,'home.html',)

def store_books(request):
    if request.method=='POST':
        book=BookStoreFrom(request.POST)   #after submitting this variable will store the data
        if book.is_valid():
            #print(book.cleaned_data)
            book.save(commit=True)          #it will store in the database
            messages.success(request,'successfully created')
            return redirect('show_book')
    else:
        book=BookStoreFrom()        
    return render(request,'store_book.html',{'form':book}) #{'form':book} this means send the form to the html file

def show_books(request):
    book=BookStoreModel.objects.all()
    for item in book:
        print(item.first_pub)
    return render(request,'show_book.html',{'data':book})

def edit_book(request,id): #as id is a primary key we can get the details
    try:
        book=BookStoreModel.objects.get(pk=id) # pk means primary key #book is saving a object of BookStoreModel with id
    except BookStoreModel.DoesNotExist:
        messages.error(request,'This id doesnt exist')
    form=BookStoreFrom(instance=book)
    if request.method=="POST":
        form=BookStoreFrom(request.POST,instance=book)
        if form.is_valid():
            form.save()
            return redirect('show_books')
    return render(request,'store_book.html',{'form':form})

def delete_book(request,id):
        try:
            book = BookStoreModel.objects.get(pk=id)
        except BookStoreModel.DoesNotExist:
            messages.error(request,'This id doesnt exist')