from rest_framework import viewsets
from escola.models import Aluno
from escola.serializer import AlunoSerializer

from escola.models import Usuario
from escola.serializer import UsuarioSerializer

class AlunoViewSet (viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer


class UsuarioViewSet (viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


