from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import View
from django.views.generic import ListView, CreateView, DetailView
from .models import Post
from .forms import PostForm
from django.urls import reverse_lazy

# Create your views here.
# contents list 
# def index(request):
#     if request.method == 'GET': # 요청의 method 구분해주기
        # return HttpResponse('Index page GET')
    # 나머지 요청
    # 나머지 요청이 들어오면, 에러 혹은 예외처리 해줘야함. 
    # return HttpResponse('No!!!')


class Index(View):
    def get(self, request): # get으로 추출해줘
        # return HttpResponse('Index page Get class')

        # 데이터베이스에 접근해서 값을 가져와야 합니다 (게시글들 목록)
        # 게시판의 글들을 보여줘야하기 때문에 데이터베이스에서 값 조회 기능 사용해야함
        # MyModel.objects.all()
        post_objs = Post.objects.all()
        # context = 데이터베이스에서 가져온 값
        context = {
            "posts" : post_objs #None 하게 되면 다른 화면 실시됨
        }
        # print(post_objs) -> 콘솔에서 확인용
        return render(request, 'blog/board.html', context)

# write
# post -form
# 글 작성 화면 
# def write(request):
#     if request.method == 'POST':
#         # form 확인하는 작업 필요 
#         form = PostForm(request.POST) 
#         if form.is_valid():
#             post = form.save()
#             return redirect('blog:list') #제출 버튼 눌렀을 때 메인페이지로 넘겨줭
#         # Get 일 때
#     form = PostForm() # 새롭게 폼을 제공해준다.
#     return render(request, 'blog/write.html', {'form': form})

# Django 자체의 클래스 뷰 기능도 강력, 편리

# model, template_name, context_object_name,
# paginate_by : 페이지를 어떻게 해줄꺼야? 한 페이지에 글을 몇 개로 해줄꺼야? 와 같은 것 
# form_class, form_valid() -> form 확인 , get_queryset()

# django.views.generic -> ListView
# class List(ListView):
#     model = Post
#     context_object_name = 'blog/write.html'
class List(ListView):
    model = Post
    template_name = 'blog/post_list.html' # 어떤 템플릿 써?
    context_object_name = 'posts' # 어떤 변수 써?


class Write(CreateView):
    model = Post # 모델 
    form_class = PostForm # 어떤 폼을 사용할꺼야?
    success_url = reverse_lazy('blog:list') # 위에 것이 성공하면 보내줄 url


class Detail(DetailView):
    model = Post
    template_name = 'blog/post_detail.html'
    context_object_name = 'post' # 하나만 넘기니깐 변수 이름을 post 로 함