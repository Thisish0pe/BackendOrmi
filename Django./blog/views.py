from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import View
from django.views.generic import ListView, CreateView, DetailView, UpdateView, DeleteView
from .models import Post, Comment, HashTag
from .forms import PostForm, CommentForm, HashTagForm
from django.urls import reverse_lazy, reverse

# Create your views here.
# contents list 
# def index(request):
#     if request.method == 'GET': # 요청의 method 구분해주기
        # return HttpResponse('Index page GET')
    # 나머지 요청
    # 나머지 요청이 들어오면, 에러 혹은 예외처리 해줘야함. 
    # return HttpResponse('No!!!')

### Post
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


class Update(UpdateView):
    model = Post
    template_name = 'blog/post_edit.html' #수정은 템플릿을  만드는  것이  좋음
    fields = ['title', 'content'] # 사용자가 적을 수 있는 것
    # success_url = reverse_lazy('blog:list')
    # intial 기능 : 초기값 설정 가능하게 해주는 기능 -> form 안에 값을 미리 넣어주기 위해서 작업

    def get_initial(self):
        initial = super().get_initial() #updateview 의 intial 가져옴
        post = self.get_object() # pk 기반으로 객체 가져옴
        initial['title'] = post.title
        initial['content'] = post.content # 값 추가
        return initial
    
    def get_success_url(self): 
        post = self.get_object() # pk 기반으로 현재 객체 가져오기 
        return reverse('blog:detail', kwargs={'pk': post.pk})
    
    #get_absolute_url


class Delete(DeleteView):
    model = Post
    success_url = reverse_lazy('blog:list')


class DetailView(View):
    def get(self, request, pk): # pk: 데이터베이스 post_id 테이블 이름 사용하고 싶어서
        # 데이터베이스 방문
        # 해당 글 하나 가져옴
        # 장고 ORM (pk -> 변경불가한 이름)
        post = Post.objects.get(pk=pk)
        # 글에 해당하는 댓글 가져옴 (comment에서 렌더링할 때  댓글 자체가 있어야하니깐)
        comments = Comment.objects.filter(post=post) #외래키와 연결
        #해시태그
        hashtags = HashTag.objects.filter(post=post)

        # 댓글 form (입력칸)
        comment_form = CommentForm()

        #태그 form (입력칸)
        hashtag_form = HashTagForm()
        context = {
            'post': post,
            'comments': comments,
            'hashtags': hashtags,
            'comment_form': comment_form,
            'hashtag_form': hashtag_form,
        }
        return render(request, 'blog/post_detail.html', context)


### Comment
class CommentWrite(View):
    # def get(self, request):
    #     pass
    def post(self, request, pk):
        form = CommentForm(request.POST)
        if form.is_valid():
            # 사용자에게 댓글 내용을 받아옴
            content = form.cleaned_data['content']
            # cleande_data : 정확하게 원하는 값 content 를 가져옴 ; 폼의 특정 값을 가져오고 싶을 때 사용 
            # 해당 아이디에 해당하는 글 불러옴
            post = Post.objects.get(pk=pk)
            # 댓글 객체 생성을 위해 위의 코드 실시 
            comment = Comment.objects.create(post=post, content=content)
            return redirect('blog:detail', pk=pk)
            # comment = Comment(post=post) -> comment.save()
            # redirect 는 그저 화면만 이동


class CommentDelete(View):
    def post(self, request, pk):
        # 지울 객체를 찾아야해요 -> 댓글 객체를 가지고 와야함 -> 댓글 pk
        comment = Comment.objects.get(pk=pk)
        # 삭제 후 상세 페이지로 돌아가기
        post_id = comment.post.id # post = post 객체
        # 삭제
        comment.delete()
        return redirect('blog:detail', pk=post_id)


###Hashtag
class HashTagWrite(View):
    def post(self, request, pk):
        form = HashTagForm(request.POST)
        if form.is_valid():
            # 사용자에게 태그 내용을 받아옴
            name = form.cleaned_data['name']
            # 해당 아이디에 해당하는 글 불러옴
            post = Post.objects.get(pk=pk)
            # 댓글 객체 생성, create 메서드를 사용할 때는 save 필요 없음
            hashtag = HashTag.objects.create(post=post, name=name)
            # comment = Comment(post=post) -> comment.save()
            return redirect('blog:detail', pk=pk)
            # redirect 는 그저 화면만 이동


class HashTagDelete(View):
    def post(self, request, pk):
        # 지울 객체를 찾아야 한다. -> 태그 객체
        hashtag = HashTag.objects.get(pk=pk)
        # 상세페이지로 돌아가기
        post_id = hashtag.post.id
        # 삭제
        hashtag.delete()
        
        return redirect('blog:detail', pk=post_id)