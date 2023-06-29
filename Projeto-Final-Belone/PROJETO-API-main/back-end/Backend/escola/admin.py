from django.contrib import admin
from escola.models import Aluno
from escola.models import Usuario

class Alunos(admin.ModelAdmin):
    list_display = ('id', 'nome', 'cpf', 'email')
    list_display_links = ('id', 'nome')
    search_fields = ('nome', 'cpf',)

admin.site.register(Aluno, Alunos)

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'email', 'senha',)
    list_display_links = ('id', 'user',)
    search_fields = ('user', 'email',)

admin.site.register(Usuario, UsuarioAdmin)
