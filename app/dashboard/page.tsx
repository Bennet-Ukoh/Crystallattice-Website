'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
// import { useAuth } from '@/lib/auth'; // Assuming useAuth is not implemented yet or removed
import { BookOpen, Clock, Trophy, TrendingUp, Play, ArrowRight, GraduationCap, User, Users, FileText } from 'lucide-react'; // Added GraduationCap and User, Users, FileText
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation'; // Keep useSearchParams and useRouter
import { useEffect, useState } from 'react'; // Keep useEffect and useState
import { dashboard } from '@/lib/content'; // Import dashboard content
import Image from 'next/image'; // Added Image import
import { Navigation } from '@/components/navigation'; // Import Navigation component

export default function DashboardPage() {
  // const { user } = useAuth(); // If useAuth is not implemented, comment it out
  const searchParams = useSearchParams();
  const router = useRouter();
  const [role, setRole] = useState<"student" | "instructor" | null>(null);

  useEffect(() => {
    const roleParam = searchParams.get("role") as "student" | "instructor";
    if (roleParam && (roleParam === "student" || roleParam === "instructor")) {
      setRole(roleParam);
    } else {
      router.push("/login");
    }
  }, [searchParams, router]);

  if (!role) {
    return (
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading dashboard...</p>
          </div>
        </main>
    );
  }

  const dashboardData = dashboard[role];

  const iconMap = {
    BookOpen,
    Clock,
    Trophy,
    TrendingUp,
    Play,
    ArrowRight,
    GraduationCap, // Added to map
    User, // Added to map
    Users, // Added to map
    FileText, // Added to map
  };

  return (
    <div className="min-h-screen bg-muted/10">
      <Navigation /> {/* Add Navigation component here */}
      <div className="container mx-auto px-4 space-y-8 py-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Welcome Back, {role === 'student' ? 'Student' : 'Instructor'}!</h1>
          <p className="text-lg text-muted-foreground">{dashboardData.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {dashboardData.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-accent border-2 border-transparent group">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-primary group-hover:text-accent transition-colors duration-300" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardData.recentCourses && dashboardData.recentCourses.map((course) => (
              <Card key={course.id} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-accent border-2 border-transparent group">
                    <CardContent className="p-6">
                  <div className="relative w-full h-40 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={course.thumbnail || '/placeholder.svg'}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{objectFit: "cover"}}
                    />
                          </div>
                  <h3 className="font-semibold text-lg text-primary group-hover:text-accent transition-colors duration-300">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                          </div>
                    <Progress value={course.progress} className="w-full bg-primary/20 dark:bg-primary/50" indicatorClassName="bg-primary" />
                        </div>
                  <p className="text-sm text-muted-foreground mt-2">Next: {course.nextLesson}</p>
                  <Button className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300">
                    <Link href={`/dashboard/courses/${course.id}`} className="flex items-center justify-center">
                      <Play className="h-4 w-4 mr-2" />
                      Continue
                    </Link>
                  </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Link href="/dashboard/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">Your Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dashboardData.achievements && dashboardData.achievements.map((achievement, index) => {
              const Icon = iconMap[achievement.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-accent border-2 border-transparent group">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                            </div>
                    <div className="text-left">
                      <h4 className="font-medium text-lg text-primary group-hover:text-accent transition-colors duration-300">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            </div>
          <div className="mt-8 text-center">
            <Button variant="outline" size="sm" asChild className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Link href="/dashboard/achievements">
                View All Achievements
                    </Link>
                  </Button>
                  </div>
        </motion.div>
                </div>
              </div>
  );
}
