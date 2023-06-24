'''
Dictionary : {'key' : 'value'}
- key : 값 변경 가능 / value : 불가능 
- 리스트를 보완하기 위해서 -> 원하는 값에 빠르게 접근하기 위해서 사용하는 것 (key value 존재 이유)
- 시퀀스 (순서)형 자료는 아니지만 순회가 가능하다. -> for 문
    - 키만 순회
    - 값만 순회
    - 키와 값 쌍으로 순회 가능 
'''

x = {"a" : 1, "b" : 2}
# 키 x,keys() -> key 뽑기
# 값 x.values() -> value 뽑기
# 아이템 x.items()

for i in x,keys():
for i in x.values():
for i in x.items():

print(x.key())
print(x.values())
print(x.items()) #[{'a', 1}, {'b', 2}]

# enumerate -> 인덱스를 만들어 줄 때 많이 사용
