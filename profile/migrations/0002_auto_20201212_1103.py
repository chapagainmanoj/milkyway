# Generated by Django 3.1.4 on 2020-12-12 11:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='workexperience',
            old_name='user',
            new_name='profile',
        ),
    ]