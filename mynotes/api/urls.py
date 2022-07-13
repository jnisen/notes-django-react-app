from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('notes/', views.getNotes, name='notes'),
    path('notes/<str:pk>/', views.getNote, name='note'),

    path('notes/create/post', views.createNote, name="create-note"),
    
    path('notes/update/<str:pk>/', views.updateNote, name='update-note'),
    
    path('notes/delete/<str:pk>/', views.deleteNote, name='delete-note'),
    
]
