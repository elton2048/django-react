# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-07-11 09:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='finefile',
            name='status',
            field=models.CharField(choices=[('0', 'Hidden'), ('1', 'Enabled'), ('2', 'Disabled')], default='1', max_length=1),
        ),
    ]
