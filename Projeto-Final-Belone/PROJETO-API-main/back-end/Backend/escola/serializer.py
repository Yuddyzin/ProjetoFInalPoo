from rest_framework import serializers
from escola.models import Aluno
from escola.models import Usuario

class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ('id','nome','cpf', 'email',)


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'user','email','senha',)
