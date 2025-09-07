from django.urls import path
from . import views

# from django.contrib import admin
app_name = "app" 

urlpatterns = [
    path('', views.register, name='register'),
    path('register', views.register, name='register'),
    path('login/', views.login_view, name='login'),
	path("electronic/", views.home, name="electronic"),
    path('full_de/<int:post_id>/',views.detail, name = "full_de"),
    path('place/',views.orderview, name="place"),
    path('order/', views.Orderpage, name = 'order'),


	# path('add/', admin.site.urls),
]
