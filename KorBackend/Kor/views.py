from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

class CreateView(generics.ListCreateAPIView):
    """
    A class based view for creating and fetching user records
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def perform_create(self, serializer):
        """Save the user data when creating a new user."""
        serializer.save()

class DetailsView(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, PUT and DELETE requests."""
    queryset = User.objects.all()
    serializer_class = UserSerializer
