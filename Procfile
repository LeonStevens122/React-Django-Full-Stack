release python leadmanager/manage.py migrate
web: gunicorn leadmanager.leadmanager.wsgi.py --log-file -



heroku ps:scale web=1
leadmanager\leadmanager\wsgi.py