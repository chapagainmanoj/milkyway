# Generated by Django 3.1.4 on 2020-12-14 19:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0005_profile_designation'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='seconary_adderss',
            new_name='secondary_address',
        ),
    ]
