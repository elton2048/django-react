import json
import django
from django.views import generic
from django.views.generic import View, TemplateView
# from django.views.generic.detail import SingleObjectMixin
from django.shortcuts import render
from django.urls import reverse

from .forms import FileFieldWithFineUploaderForm
from . import models

import logging
logger = logging.getLogger('django')

# Create your views here.


class TestView(View):
    model = models.FineFile
    http_method_names = ['get', 'post']
    template_name = 'first.html'

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        logger.info(request.POST)

    def get_context_data(self, **kwargs):
        # context = super(type(self), self).get_context_data(**kwargs)
        csrf_token = django.middleware.csrf.get_token(self.request)
        # logger.info(csrf_token)
        logger.info(self.model._meta.get_field('status').choices)
        upload_url = reverse('django_fine_uploader:upload')
        options = {
            'request': {
                'endpoint': upload_url,
                'customHeaders': {'X-CSRFToken': csrf_token},
            },
            'deleteFile': {
                'enabled': True,
                'endpoint': reverse('django_fine_uploader:delete'),
                'customHeaders': {'X-CSRFToken': csrf_token},
            },
            'chunking': {
                'enabled': True,
                'concurrent': {
                    'enabled': True
                },
                'success': {
                    'endpoint': '%s?done' % upload_url
                }
            },
            'validation': {
                'itemLimit': 1
            }
        }

        context = {}
        context['options'] = json.dumps(options)
        context['status'] = json.dumps(self.model._meta.get_field('status').choices)
        context['test'] = {}

        context['test']['list'] = [ '1', '2', '4', '5', '2', ]
        logger.info(context['test'])
        return context


class ExampleWidgetView(generic.FormView):
    template_name = 'example_form.html'
    form_class = FileFieldWithFineUploaderForm

    def get_context_data(self, **kwargs):
        context = super(type(self), self).get_context_data(**kwargs)
        context['test'] = {}
        context['test']['123'] = '123'
        context['test']['arr'] = 'arr'
        context['test']['list'] = [ '1', '2', '4', '5', '2', ]
        logger.info(context['test'])
        return context
