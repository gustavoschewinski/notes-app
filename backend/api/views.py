from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    return Response('Hello world :)')

@api_view(['GET'])
def getNotes(request):
    # We get the data from the database
    # notes = Note.objects.all()
    notes = Note.objects.exclude(body='').exclude(body=" ").order_by('-updated')
    # We serialize the data
    serializer = NoteSerializer(notes, many=True)
    # We return the data
    return Response(serializer.data)

@api_view(['GET'])
def getNote(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False) # Now many is set to False because we are only getting one note
    return Response(serializer.data)

@api_view(['PUT']) # Updates exsisitng note
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)

    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted')

@api_view(['POST'])
def createNote(request):
    data = ""
    note = Note.objects.create(
        body = data
    )
    serializer = NoteSerializer(note)
    return Response(serializer.data)