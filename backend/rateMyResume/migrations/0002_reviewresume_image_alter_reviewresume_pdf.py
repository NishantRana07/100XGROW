# Generated by Django 5.1.5 on 2025-03-06 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rateMyResume', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reviewresume',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='reviewResumes/images/'),
        ),
        migrations.AlterField(
            model_name='reviewresume',
            name='pdf',
            field=models.FileField(upload_to='reviewResumes/'),
        ),
    ]
