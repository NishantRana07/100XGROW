from rest_framework import serializers
from .models import ReviewResume, Review

class ResumeSerializer(serializers.ModelSerializer):
    average_rating = serializers.ReadOnlyField()

    class Meta:
        model = ReviewResume
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
