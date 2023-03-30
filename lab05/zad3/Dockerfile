ARG PYTHON_VERSION
FROM python:${PYTHON_VERSION}
WORKDIR /usr/
COPY ["./myapp", "./myapp" ]
RUN pip install -r ./myapp/requirements.txt
CMD ["python", "./myapp/main.py"]