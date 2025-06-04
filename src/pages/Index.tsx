
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, PawPrint, Dog, Cat } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for joining the movement! 🐾 We'll be in touch soon!");
    setFormData({ name: "", city: "", role: "", message: "" });
  };

  const petProfiles = [
    {
      name: "Buddy",
      type: "Golden Retriever",
      age: "3 years",
      description: "Loves playing fetch and making new friends! 🎾",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop"
    },
    {
      name: "Whiskers",
      type: "Tabby Cat",
      age: "2 years", 
      description: "A gentle soul who loves sunny windowsills 🌞",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=300&fit=crop"
    },
    {
      name: "Luna",
      type: "Border Collie",
      age: "1 year",
      description: "Smart and energetic, perfect hiking companion! 🏔️",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=300&h=300&fit=crop"
    }
  ];

  const impactStories = [
    {
      title: "From Stray to Superhero! 🦸‍♂️",
      description: "Max was found on the streets and is now a certified therapy dog helping children in hospitals.",
      location: "Mumbai"
    },
    {
      title: "Community Cat Café Success! ☕",
      description: "Our pet-friendly café initiative helped 50+ cats find loving homes in just 6 months.",
      location: "Bangalore"
    },
    {
      title: "Pawsome Park Project! 🌳",
      description: "Transformed an abandoned lot into a beautiful dog park with agility courses and water fountains.",
      location: "Delhi"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PawPrint className="h-8 w-8 text-orange-500 animate-bounce" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                PawCity
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Volunteer", "Impact Stories", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-400/20"></div>
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <PawPrint className="h-12 w-12 text-orange-300" />
        </div>
        <div className="absolute bottom-40 right-20 animate-bounce delay-2000">
          <Dog className="h-16 w-16 text-blue-300" />
        </div>
        <div className="absolute top-1/3 right-10 animate-bounce delay-500">
          <Cat className="h-10 w-10 text-orange-400" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Making Cities
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Paw-some! 🐾
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in delay-300">
            Join the movement to create pet-friendly spaces where every furry friend feels at home! 
            Because if a puppy can find its way, so should your community! 🐶✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-full transform transition-all duration-200 hover:scale-105"
              onClick={() => document.getElementById('impact-stories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More 🌟
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section id="volunteer" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              Volunteer Now! 🙋‍♀️
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to make a difference? Join our pack of amazing volunteers and help create pawsome cities! 🐕‍🦺
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-orange-50 to-blue-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">Sign Up to Volunteer</CardTitle>
              <CardDescription className="text-gray-600">
                Every paw print matters! Let's build something amazing together 🐾
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your awesome name! 😊"
                      className="mt-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-gray-700 font-medium">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      placeholder="Which city are we making pawsome? 🏙️"
                      className="mt-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="role" className="text-gray-700 font-medium">Role Preference</Label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                    <SelectTrigger className="mt-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400">
                      <SelectValue placeholder="How would you like to help? 🤝" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-orange-200">
                      <SelectItem value="rescue">Animal Rescue 🚑</SelectItem>
                      <SelectItem value="adoption">Adoption Coordinator 🏠</SelectItem>
                      <SelectItem value="events">Event Organizer 🎪</SelectItem>
                      <SelectItem value="awareness">Awareness Campaigns 📢</SelectItem>
                      <SelectItem value="veterinary">Veterinary Support 🩺</SelectItem>
                      <SelectItem value="transport">Pet Transport 🚗</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Tell us about yourself!</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Share your passion for pets, experience, or just why you want to join our pawsome mission! 🌟"
                    className="mt-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400 min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 rounded-full transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Join Our Pack! 🐕‍🦺✨
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pet Adoption Carousel */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              Meet Your New Best Friend! 🐕❤️
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These adorable furballs are looking for their forever homes. Could it be with you? 🏠
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {petProfiles.map((pet, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={pet.image} 
                    alt={pet.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <PawPrint className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pet.name}</h3>
                  <p className="text-orange-500 font-medium mb-1">{pet.type} • {pet.age}</p>
                  <p className="text-gray-600 mb-4">{pet.description}</p>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-full">
                    Adopt Me! 💕
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section id="impact-stories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              Impact Stories 📖✨
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real moments that inspire! See how we're making cities more pawsome, one tail wag at a time! 🐾
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {impactStories.map((story, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-400 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                  <div className="flex items-center text-blue-500 font-medium">
                    <span className="text-sm">📍 {story.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <PawPrint className="h-8 w-8 text-orange-400" />
              <span className="text-2xl font-bold">PawCity</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Making cities pawsome, one neighborhood at a time! Join our mission to create pet-friendly communities where every furry friend feels at home. 🐾❤️
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>📧 hello@pawcity.com</span>
              <span>📱 +91 98765 43210</span>
              <span>🌐 Follow us for daily dose of pawsitivity!</span>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 text-gray-400 text-sm">
              Made with 💕 for our furry friends | © 2024 PawCity Campaign
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
