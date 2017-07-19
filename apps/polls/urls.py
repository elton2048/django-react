from django.conf.urls import url
from django.contrib import admin
from . import views


urlpatterns = [
    url(r'^$', views.TestView.as_view()),
    url(r'^widget/$', view=views.ExampleWidgetView.as_view()),
]
