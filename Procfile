release python leadmanager/manage.py migrate
web: gunicorn -w 2 -b 0.0.0.0:8000 --chdir /leadmanager leadmanager.wsgi --preload --log-file - --log-level debug

