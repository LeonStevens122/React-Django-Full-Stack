release python leadmanager/manage.py migrate


web: gunicorn -b 0.0.0.0:$PORT --chdir leadmanager leadmanager.wsgi:application --preload --log-file - --log-level debug

