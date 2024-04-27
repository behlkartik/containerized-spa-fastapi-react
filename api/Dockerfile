FROM python:3.9.19

WORKDIR /app/gameshop

COPY requirements.txt ./

RUN pip install  --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5555

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "5555", "--reload", "--env-file", "./app/dev.env" ]