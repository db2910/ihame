"use client";

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Anchor, CheckCircle, CircleDot, FileText, Sailboat, ShieldAlert, ShipWheel, Truck, Warehouse } from 'lucide-react';
import ContainerTrackingForm from '@/components/track/ContainerTrackingForm';
import LocationsTicker from '@/components/LocationsTicker';

// Updated interface to include all fields from the ShipsGo response
interface ShipsGoData {
  Message: string;
  Status: string;
  StatusId: number;
  ShippingLine: string;
  ContainerNumber: string;
  ContainerTEU: string;
  ContainerType: string;
  FromCountry: string;
  Pol: string;
  LoadingDate: { Date: string | null; IsActual: boolean };
  DepartureDate: { Date: string | null; IsActual: boolean };
  TSPorts: { Pod: string; ArrivalDate: { Date: string | null }; DepartureDate: { Date: string | null }; Status: string }[];
  ToCountry: string;
  Pod: string;
  ArrivalDate: { Date: string | null; IsActual: boolean };
  DischargeDate: { Date: string | null; IsActual: boolean };
  Vessel: string;
  VesselIMO: string;
  VesselLatitude: string | number;
  VesselLongitude: string | number;
  VesselVoyage: string;
  FormatedTransitTime: string;
  ETA: string | null;
  FirstETA: string | null;
  LiveMapUrl: string;
  Co2Emission: string;
  EmptyToShipperDate: string | null;
  GateInDate: string | null;
  GateOutDate: string | null;
  EmptyReturnDate: string | null;
}

const getStatusIcon = (status: string) => {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus.includes('discharged')) {
    return <Anchor className="w-8 h-8 mr-4 text-[#2875B4]" />;
  }
  if (normalizedStatus.includes('loaded')) {
    return <ShipWheel className="w-8 h-8 mr-4 text-[#2875B4]" />;
  }
  if (normalizedStatus.includes('transit') || normalizedStatus.includes('en route')) {
    return <Sailboat className="w-8 h-8 mr-4 text-green-500" />;
  }
  if (normalizedStatus.includes('arrived')) {
    return <Warehouse className="w-8 h-8 mr-4 text-[#2875B4]" />;
  }
  if (normalizedStatus.includes('gate in')) {
    return <Truck className="w-8 h-8 mr-4 text-[#2875B4]" />;
  }
  if (normalizedStatus.includes('gate out')) {
    return <Truck className="w-8 h-8 mr-4 text-[#2875B4]" style={{ transform: 'scaleX(-1)' }} />;
  }
  if (normalizedStatus.includes('delivered') || normalizedStatus.includes('completed')) {
    return <CheckCircle className="w-8 h-8 mr-4 text-green-500" />;
  }
  if (normalizedStatus.includes('booked') || normalizedStatus.includes('pre-advice') || normalizedStatus.includes('info received')) {
    return <FileText className="w-8 h-8 mr-4 text-[#2875B4]" />;
  }
  if (normalizedStatus.includes('error') || normalizedStatus.includes('exception') || normalizedStatus.includes('delayed')) {
    return <ShieldAlert className="w-8 h-8 mr-4 text-red-500" />;
  }

  // Default icon for unknown statuses
  return <CircleDot className="w-8 h-8 mr-4 text-gray-500" />;
};

function TrackContainerPageComponent() {
  const searchParams = useSearchParams();
  const initialContainerNumber = searchParams.get('containerNumber');

  const [result, setResult] = useState<ShipsGoData | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Helper function to create timeline events from various date fields
  const createTimelineEvents = (data: ShipsGoData) => {
    const events = [];
    
    // Add events only if the date exists and is not null
    if (data.EmptyToShipperDate) {
      events.push({ 
        date: data.EmptyToShipperDate, 
        event: 'Empty Container Dispatched to Shipper', 
        location: data.FromCountry, 
        isActual: true 
      });
    }
    
    if (data.GateInDate) {
      events.push({ 
        date: data.GateInDate, 
        event: 'Container Gated In at Port of Loading', 
        location: data.Pol, 
        isActual: true 
      });
    }
    
    if (data.LoadingDate && data.LoadingDate.Date) {
      events.push({ 
        date: data.LoadingDate.Date, 
        event: 'Container Loaded onto Vessel', 
        location: data.Pol, 
        isActual: data.LoadingDate.IsActual 
      });
    }
    
    if (data.DepartureDate && data.DepartureDate.Date) {
      events.push({ 
        date: data.DepartureDate.Date, 
        event: 'Vessel Departed from Port of Loading', 
        location: data.Pol, 
        isActual: data.DepartureDate.IsActual 
      });
    }
    
    // Handle transshipment ports with null checks
    if (data.TSPorts && Array.isArray(data.TSPorts)) {
      data.TSPorts.forEach(ts => {
        if (ts.ArrivalDate && ts.ArrivalDate.Date) {
          events.push({ 
            date: ts.ArrivalDate.Date, 
            event: 'Vessel Arrived at Transshipment Port', 
            location: ts.Pod, 
            isActual: true 
          });
        }
        if (ts.DepartureDate && ts.DepartureDate.Date) {
          events.push({ 
            date: ts.DepartureDate.Date, 
            event: 'Vessel Departed from Transshipment Port', 
            location: ts.Pod, 
            isActual: true 
          });
        }
      });
    }

    if (data.ArrivalDate && data.ArrivalDate.Date) {
      events.push({ 
        date: data.ArrivalDate.Date, 
        event: 'Vessel Arrived at Port of Discharge', 
        location: data.Pod, 
        isActual: data.ArrivalDate.IsActual 
      });
    }
    
    if (data.DischargeDate && data.DischargeDate.Date) {
      events.push({ 
        date: data.DischargeDate.Date, 
        event: 'Container Discharged from Vessel', 
        location: data.Pod, 
        isActual: data.DischargeDate.IsActual 
      });
    }
    
    if (data.GateOutDate) {
      events.push({ 
        date: data.GateOutDate, 
        event: 'Container Gated Out from Port of Discharge', 
        location: data.Pod, 
        isActual: true 
      });
    }
    
    if (data.EmptyReturnDate) {
      events.push({ 
        date: data.EmptyReturnDate, 
        event: 'Empty Container Returned', 
        location: data.ToCountry, 
        isActual: true 
      });
    }

    // Sort events by date, filtering out any events without valid dates
    return events
      .filter(event => event.date)
      .sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime());
  };

  const handleTrack = async (containerNumber: string) => {
    if (!containerNumber) return;
    setIsLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch('/api/track-container', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ containerNumber }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Tracking failed.');
      } else {
        setResult(Array.isArray(data) ? data[0] : data);
      }
    } catch {
      setError('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    if (initialContainerNumber) {
      handleTrack(initialContainerNumber);
    }
  }, [initialContainerNumber]);

  const timelineEvents = result ? createTimelineEvents(result) : [];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
      <LocationsTicker />
      {/* Hero Section - Restored original design */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2875B4]/30 to-[#7AB648]/30"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Track Your{' '}
            <span className="bg-gradient-to-r from-[#2875B4] to-[#7AB648] bg-clip-text text-transparent">
              Shipment
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Enter your container number to get real-time status and voyage data.
          </motion.p>
          
          <div className="w-full max-w-2xl mx-auto">
            <ContainerTrackingForm onSubmit={handleTrack} isLoading={isLoading} />
          </div>
        </div>

        <motion.div className="absolute top-20 left-10 text-4xl opacity-20" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>📦</motion.div>
        <motion.div className="absolute top-40 right-20 text-3xl opacity-20" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>🚚</motion.div>
        <motion.div className="absolute bottom-40 left-20 text-3xl opacity-20" animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}>🌍</motion.div>
      </section>

      {/* Results/Error Section */}
      <div className="py-12 px-4">
        {isLoading && (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-12">
            <svg className="w-12 h-12 text-[#2875B4] animate-spin mb-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
            <p className="text-lg text-[#2875B4] font-medium">Fetching container data...</p>
          </motion.div>
        )}
        {error && !isLoading && (
          <motion.div key="error" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto bg-red-50 border border-red-200 rounded-2xl p-8 text-center shadow-lg">
            <div className="text-4xl mb-4">❌</div>
            <h3 className="text-xl font-semibold text-red-800 mb-2">Tracking Error</h3>
            <p className="text-red-600 mb-4">{error}</p>
            <div className="mt-6 text-sm text-gray-500"><p>We couldn&apos;t find your container. Please verify the number and try again.</p></div>
          </motion.div>
        )}
        {result && !isLoading && !error && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 mb-6 border-b">
              <div className="flex items-center">
                {getStatusIcon(result.Status)}
                <div>
                  <h2 className="text-3xl font-bold text-[#2875B4]">{result.Status}</h2>
                  <p className="text-gray-600 font-mono">{result.ContainerNumber} - {result.ShippingLine}</p>
                </div>
              </div>
              {result.LiveMapUrl && <a href={result.LiveMapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0 inline-block text-white bg-gradient-to-r from-[#2875B4] to-[#7AB648] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition">View Live Map</a>}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column for Details */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-2">Route</h3>
                  <p className="text-gray-700"><span className="font-semibold text-gray-900">From:</span> {result.Pol} ({result.FromCountry})</p>
                  <p className="text-gray-700"><span className="font-semibold text-gray-900">To:</span> {result.Pod} ({result.ToCountry})</p>
                  <p className="text-gray-700"><span className="font-semibold text-gray-900">Transit Time:</span> {result.FormatedTransitTime}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-2">Vessel</h3>
                  <p className="text-gray-700"><span className="font-semibold text-gray-900">Name:</span> {result.Vessel}</p>
                  <p className="text-gray-700"><span className="font-semibold text-gray-900">IMO:</span> {result.VesselIMO}</p>
                  <p className="text-gray-700"><span className="font-semibold text-gray-900">Voyage No:</span> {result.VesselVoyage}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-2">Container Specs</h3>
                  <p className="text-gray-700"><span className="font-semibold text-gray-900">Type:</span> {result.ContainerType}</p>
                  <p className="text-gray-700"><span className="font-semibold text-gray-900">TEU:</span> {result.ContainerTEU}</p>
                  <p className="text-gray-700"><span className="font-semibold text-gray-900">CO₂ Emission:</span> {result.Co2Emission} tons</p>
                </div>
              </div>

              {/* Right Column for Timeline */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Journey Timeline</h3>
                {timelineEvents.length > 0 ? (
                  <ol className="relative border-l-2 border-[#7AB648]/50 ml-2">
                    {timelineEvents.map((event, idx) => (
                      <li key={idx} className="mb-8 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-[#7AB648] rounded-full -left-3 ring-8 ring-white">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        </span>
                        <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">{event.event}</h4>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{event.date ? new Date(event.date).toLocaleString() : ''} {event.isActual && <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Actual</span>}</time>
                        <p className="text-base font-normal text-gray-500">{event.location}</p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-500">No timeline events available for this shipment.</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}

// Suspense wrapper remains the same
export default function TrackContainerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrackContainerPageComponent />
    </Suspense>
  );
} 