import React from "react";
import { Trophy, Calendar, Award, Users, Clock, Target } from "lucide-react";
import { StoryCard } from "../components/stories/StoryCard";
import { mockStories } from "../data/mockData";

export const ContestPage: React.FC = () => {
  const contestStories = mockStories.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white p-8 mb-12">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-300" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Monthly Contest: June 2025
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-purple-100">
            "Uncovering Government Transparency"
          </h2>
          <p className="text-lg text-purple-100 mb-6 leading-relaxed">
            Submit your best investigative story focusing on government
            transparency, public spending, or administrative accountability.
            Stories will be judged based on impact, research quality, and
            storytelling excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Submission Deadline</span>
              </div>
              <p className="text-purple-100">March 31, 2024</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Prize Pool</span>
              </div>
              <p className="text-purple-100">
                CHF 2,000 + Publication in "Le Nouvelliste"
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Participants</span>
              </div>
              <p className="text-purple-100">247 submissions</p>
            </div>
          </div>

          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Submit Your Story
          </button>
        </div>
      </div>

      {/* Contest Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Contest Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Best Investigation",
              description: "Most thorough research and fact-finding",
              icon: Target,
              prize: "$2,000",
            },
            {
              title: "Community Impact",
              description: "Story with the greatest positive community effect",
              icon: Users,
              prize: "$2,000",
            },
            {
              title: "Rising Journalist",
              description: "Best story from first-time participants",
              icon: Award,
              prize: "$1,000",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{category.title}</h3>
                  <p className="text-blue-600 font-semibold">
                    {category.prize}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Judging Criteria
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Research Quality",
                weight: "30%",
                description: "Depth and accuracy of investigation",
              },
              {
                title: "Storytelling",
                weight: "25%",
                description: "Clarity and engagement of narrative",
              },
              {
                title: "Impact Potential",
                weight: "25%",
                description: "Ability to drive positive change",
              },
              {
                title: "Use of FOI",
                weight: "20%",
                description: "Effective use of transparency tools",
              },
            ].map((criteria, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  {criteria.weight}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {criteria.title}
                </h3>
                <p className="text-sm text-gray-600">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contest Submissions */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Submissions
          </h2>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>Updated hourly</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contestStories.map((story, index) => (
            <div key={story.id} className="relative">
              {index < 3 && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
              )}
              <StoryCard story={story} />
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Contest Timeline
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            {[
              {
                date: "March 1",
                title: "Contest Launch",
                description: "Submissions open",
                status: "completed",
              },
              {
                date: "March 15",
                title: "Mid-Point Check",
                description: "Featured submissions showcase",
                status: "completed",
              },
              {
                date: "March 31",
                title: "Submission Deadline",
                description: "Final submissions due by 11:59 PM",
                status: "upcoming",
              },
              {
                date: "April 7",
                title: "Winners Announced",
                description: "Results published and prizes awarded",
                status: "upcoming",
              },
            ].map((event, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div
                  className={`w-4 h-4 rounded-full ${
                    event.status === "completed"
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
