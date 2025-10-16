import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FileText, Search, Users, UserCheck, Download, Star, Shield, Heart, Award, TrendingUp, CheckCircle2, ArrowRight,MapPin, Clock, DollarSign, Bookmark } from "lucide-react";

const Jobs = () => {
     

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            {/* CTA Section */}
 

            <Footer />
        </div>
    );
};

export default Jobs;