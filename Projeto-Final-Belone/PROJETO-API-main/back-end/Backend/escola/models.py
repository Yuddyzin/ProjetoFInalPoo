from django.db import models

class Aluno(models.Model):
    nome = models.CharField(max_length=100)
    cpf = models.BigIntegerField(max_length=9)
    email =  models.EmailField(max_length=100)

    def __str__ (self):
        return self.nome

class Usuario(models.Model):
    user = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    senha = models.CharField(max_length=30)

    def __str__(self):
        return self.user