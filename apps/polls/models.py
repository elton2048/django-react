from django.db import models

# Create your models here.

APPROVAL_CHOICES = (
    (u'0', u'Hidden'),
    (u'1', u'Enabled'),
    (u'2', u'Disabled'),
)


class FineFile(models.Model):
    key = models.CharField(max_length=20)
    fine_file = models.FileField()
    status = models.CharField(max_length=1, choices=APPROVAL_CHOICES, default='1')
