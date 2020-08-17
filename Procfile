release python leadmanager/manage.py migrate
--chdir leadmanager\

web: gunicorn -b 0.0.0.0:8000 leadmanager.wsgi --preload --log-file - --log-level debug

