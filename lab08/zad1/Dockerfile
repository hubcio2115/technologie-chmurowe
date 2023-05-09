FROM alpine
COPY ["./myapp", "/usr/myapp" ]
WORKDIR /usr/myapp
RUN apk upgrade
RUN apk add python3
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN pip3 install -r ./requirements.txt
RUN . .venv/bin/activate
CMD ["python", "./main.py"]
