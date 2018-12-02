
from rest_framework import serializers, status
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'email', 'snapchatProfileURL', 'instagramProfileURL', 'facebookProfileURL', 'linkedinProfileURL', 'korProfilePictureURL', 'qrCodeURL', 'location', 'uid', 'notes')

class ConnectionSerializer(serializers.ModelSerializer):
    """
    A connection serializer to return the connection details
    """
    user = UserSerializer(required=True)

    class Meta:
        model = Connection
        fields = ('me', 'otherUser', 'date', 'uid')

    def create(self, validated_data):
        """
        Overriding the default create method of the Model serializer.
        :param validated_data: data containing all the details of student
        :return: returns a successfully created student record
        """
        me = otherUser = UserSerializer.create(UserSerializer(), validated_data=me_data)
        otherUser = UserSerializer.create(UserSerializer(), validated_data=otherUser_data)
        date = validated_data.pop('date')
        uid = validated_data.pop('uid')
        connection, created = Connection.objects.update_or_create(me=me, otherUser = otherUser,date=date, uid=uid)
        return connection
