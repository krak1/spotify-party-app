from django.db.models import fields
from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause', 'votes_to_skip', 'created_at')

class CreateRoomSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')

class UpdateRoomSerialzer(serializers.ModelSerializer):
    
    code = serializers.CharField(validators=[])
    # to make sure that the code is unique

    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip', 'code')
        