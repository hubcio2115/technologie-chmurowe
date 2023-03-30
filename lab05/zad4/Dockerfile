FROM alpine
ARG PYTHON_VERSION
COPY ["./myapp", "/usr/myapp" ]
WORKDIR /usr/myapp
RUN apk upgrade
RUN apk add python3=${PYTHON_VERSION}
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN pip3 install -r ./requirements.txt
RUN . .venv/bin/activate
EXPOSE 8080
CMD ["python", "./main.py"]
