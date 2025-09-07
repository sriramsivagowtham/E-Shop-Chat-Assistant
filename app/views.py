from django.shortcuts import render,redirect
from .models import Post
from django.shortcuts import render, get_object_or_404
from django.contrib import messages
from .forms import RegisterForm, LoginForm
from .models import UserProfile

def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Registration successful! Please login.")
            return redirect('app:login')
    else:
        form = RegisterForm()
    return render(request, 'signup.html', {'form': form})


def login_view(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            try:
                user = UserProfile.objects.get(email=email, password=password)
                messages.success(request, f"Welcome {user.username}!")
                return redirect('app:electronic')
            except UserProfile.DoesNotExist:
                messages.error(request, "Invalid credentials")
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})






def home(request):
    product = Post.objects.all()
    return render(request,'index.html',{'product':product})


def detail(request,post_id):
    add = Post.objects.get(id=post_id)
    return render(request,'detail.html', {'add':add})


def orderview(request):
    return render(request,'orderplace.html') 

def Orderpage(request):
    return render(request,'seperate.html') 

def Sing_up(request):
    return render(request,'signup.html')

def Log_in(request):
    return render(request,'login.html')