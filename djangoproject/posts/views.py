from django.shortcuts import render
from .models import Posts
# from django.http import HttpResponse

# Create your views here.
def index(request):
    # return HttpResponse('HELLO FROM POSTS')

    posts = Posts.objects.all()[:10]

    context = {
        'title': 'Latests Posts',
        'posts': posts
    }

    return render(request, 'posts/index.html', context)

def details(request, id):
    post = Posts.objects.get(id=id)

    context = {
        'post': post
    }

    return render(request, 'posts/details.html', context)
