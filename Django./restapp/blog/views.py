from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Post, Comment, HashTag
from .serializers import PostSerializer, CommentSerializer, HashTagSerializer
from .forms import PostForm

# Post


class Index(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serialized_posts = PostSerializer(
            posts, many=True)   # 직렬화 # many = True 는
        return Response(serialized_posts.data)


class Write(APIView):
    # def get(self, request):
    #     # 사용자 작성 Form 만들어서 보내줌
    #     pass
    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            # 2차 수정
            post = serializer.save(writer=request.user)
            post.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 질문 : pk가 필요가 없는걸까?
class Update(APIView):
    def get(self, request, pk):
        post = Post.objects.get(pk=pk)
        serializer = PostSerializer(post)  # 하나만 가져오기 때문에 many=True 가져오지 않음
        return Response(serializer.data)

    def post(self, request, pk):
        post = Post.objects.get(pk=pk)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Delete(APIView):
    def post(self, request, pk):
        post = Post.objects.get(pk=pk)
        serializer = PostSerializer(post)
        if serializer.is_valid():
            post.delete()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        # comment hashtag 수정하기


class DetailView(APIView):
    def get(self, request, pk):
        post = Post.objects.get(pk=pk)
        serialized_post = PostSerializer(
            post)
        comments = Comment.objects.filter(post=post)
        serialized_comments = CommentSerializer(
            comments, many=True)
        hashtags = HashTag.objects.filter(post=post)
        serialized_hashtags = HashTagSerializer(
            hashtags, many=True)

        # 폼은 가지고 올 필요가 없음 (프론트엔드에서 해줄테니까)

        response_data = {
            'post': serialized_post.data,
            'comments': serialized_comments.data,
            'hashtags': serialized_hashtags.data
        }

        return Response(response_data.data)


# Comment
# pk 적용은 도대체 어떻게 해야하지?
# class CommentWrite(APIView):
#     def post(self, request, pk):
#         serializer = CommentSerializer(data=request.data)
#         if serializer.is_valid():
#             comment = serializer.save(commit=False)
#             comment.content = serializer.validated_data['content']
#             comment.writer = request.user
#             comment.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentWrite(APIView):
    def post(self, request, pk):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            comment = serializer.save(writer=request.user)
            comment.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentDelete(APIView):
    def post(self, request, pk):
        comment = Comment.objects.get(pk=pk)
        comment.delete()
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)


# HashTag
# class HashTagWrite(APIView):
#     def post(self, request, pk):
#         serializer = HashTagSerializer(data=request.data)
#         if serializer.is_valid():
#             hashtag = serializer.save(commit=False)
#             hashtag.name = serializer.validated_data['name']
#             hashtag.writer = request.user
#             hashtag.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HashTagWrite(APIView):
    def post(self, request, pk):
        serializer = HashTagSerializer(data=request.data)
        if serializer.is_valid():
            hashtag = serializer.save(writer=request.user)
            hashtag.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HashTagDelete(APIView):
    def post(self, request, pk):
        hashtag = HashTag.objects.get(pk=pk)
        hashtag.delete()
        serializer = HashTagSerializer(hashtag)
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
