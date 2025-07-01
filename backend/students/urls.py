from django.urls import path
from .views import student_api
 
urlpatterns = [
    path('api/students/', student_api, name='student_api'),
] 