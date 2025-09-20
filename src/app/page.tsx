'use client'
import React, { useState } from 'react';
import { FileText, Download, Mail, Camera, CreditCard, User, MapPin, Phone, Calendar, Users } from 'lucide-react';

const FreeWillWebsite = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
    email: '',
    
    // Executor Information
    executorName: '',
    executorAddress: '',
    executorPhone: '',
    executorRelation: '',
    
    // Beneficiaries
    beneficiaries: [{ name: '', relation: '', share: '', address: '' }],
    
    // Assets
    realEstate: '',
    bankAccounts: '',
    investments: '',
    personalProperty: '',
    otherAssets: '',
    
    // Special Instructions
    specialInstructions: '',
    
    // Witnesses
    witness1Name: '',
    witness1Address: '',
    witness2Name: '',
    witness2Address: '',
    
    // Signature
    signatureDate: '',
    signatureLocation: ''
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBeneficiaryChange = (index: any, field: any, value: any) => {
    const newBeneficiaries = [...formData.beneficiaries];
    newBeneficiaries[index] = { ...newBeneficiaries[index], [field]: value };
    setFormData(prev => ({
      ...prev,
      beneficiaries: newBeneficiaries
    }));
  };

  const addBeneficiary = () => {
    setFormData(prev => ({
      ...prev,
      beneficiaries: [...prev.beneficiaries, { name: '', relation: '', share: '', address: '' }]
    }));
  };

  const removeBeneficiary = (index) => {
    const newBeneficiaries = formData.beneficiaries.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      beneficiaries: newBeneficiaries
    }));
  };

  const handlePayPalPayment = (amount, type) => {
    setPaymentProcessing(true);
    // Simulate PayPal payment process
    setTimeout(() => {
      alert(`Payment of $${amount} processed successfully for ${type}!`);
      setPaymentProcessing(false);
      
      if (type === 'download') {
        generatePDF();
      } else if (type === 'postal') {
        alert('Your completed will has been queued for printing and posting to your address.');
      }
    }, 2000);
  };

  const generatePDF = () => {
    // In a real implementation, this would generate and download a PDF
    alert('Your completed will is being prepared for download...');
  };

  const captureScreenshot = () => {
    alert('Please use your browser\'s screenshot tool (usually Ctrl+Shift+S or Cmd+Shift+4) to capture the blank form displayed below.');
  };

  const formSteps = [
    { title: 'Personal Information', icon: User },
    { title: 'Executor Details', icon: Users },
    { title: 'Beneficiaries', icon: Users },
    { title: 'Assets & Property', icon: FileText },
    { title: 'Final Details', icon: FileText }
  ];

  const renderBlankForm = () => (
    <div className="bg-white p-8 border-2 border-gray-300 max-w-4xl mx-auto" id="blank-will-form">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">LAST WILL AND TESTAMENT</h1>
        <p className="text-gray-600">Official Legal Document</p>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Legal Name:</label>
            <div className="border-b border-gray-400 h-6"></div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Date of Birth:</label>
            <div className="border-b border-gray-400 h-6"></div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Complete Address:</label>
          <div className="border-b border-gray-400 h-6 mb-2"></div>
          <div className="border-b border-gray-400 h-6"></div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">I hereby appoint as Executor of this Will:</label>
          <div className="border-b border-gray-400 h-6 mb-2"></div>
          <div className="border-b border-gray-400 h-6"></div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">I give, devise and bequeath my estate as follows:</label>
          <div className="border-b border-gray-400 h-6 mb-2"></div>
          <div className="border-b border-gray-400 h-6 mb-2"></div>
          <div className="border-b border-gray-400 h-6 mb-2"></div>
          <div className="border-b border-gray-400 h-6"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div>
            <label className="block text-sm font-medium mb-2">Testator Signature:</label>
            <div className="border-b border-gray-400 h-12 mb-2"></div>
            <div className="border-b border-gray-400 h-6"></div>
            <p className="text-xs text-gray-500 mt-1">Date</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location:</label>
            <div className="border-b border-gray-400 h-6"></div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-bold mb-4">WITNESSES</h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium mb-2">Witness 1 Signature:</label>
              <div className="border-b border-gray-400 h-12 mb-2"></div>
              <div className="border-b border-gray-400 h-6 mb-2"></div>
              <div className="border-b border-gray-400 h-6"></div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Witness 2 Signature:</label>
              <div className="border-b border-gray-400 h-12 mb-2"></div>
              <div className="border-b border-gray-400 h-6 mb-2"></div>
              <div className="border-b border-gray-400 h-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedOption === 'screenshot') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">FreeWill.ltd</h1>
              <button
                onClick={() => setSelectedOption(null)}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Options
              </button>
            </div>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Blank Will Template - Free Screenshot</h2>
            <p className="text-gray-600 mb-6">Use your browsers screenshot tool to capture this form</p>
            <button
              onClick={captureScreenshot}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2"
            >
              <Camera className="h-5 w-5" />
              Help with Screenshot
            </button>
          </div>
          
          {renderBlankForm()}
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-4">
              This is page 1 of the official Last Will and Testament form. Additional pages would contain witness attestation clauses and legal declarations.
            </p>
          </div>
        </main>
      </div>
    );
  }

  // Main homepage when no option is selected
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">FreeWill.ltd</h1>
            <p className="text-xl text-gray-600">Create Your Last Will & Testament Online</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Legal, and Secure Will Creation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from three convenient options to create your official Last Will and Testament. 
            Our streamlined process ensures your wishes are properly documented and legally sound.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Option 1: Screenshot */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Screenshot</h3>
              <p className="text-gray-600 mb-6">
                Take a screenshot of our blank official Last Will & Testament form for completely free
              </p>
              <div className="text-3xl font-bold text-green-600 mb-6">FREE</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Official legal form template
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  All pages included
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Print and fill by hand
                </li>
              </ul>
              <button
                onClick={() => setSelectedOption('screenshot')}
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Get Free Form
              </button>
            </div>
          </div>

          {/* Option 2: Fill & Download */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-blue-200 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                MOST POPULAR
              </span>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fill & Download</h3>
              <p className="text-gray-600 mb-6">
                Complete the form online, pay once, then download your personalized will to print at home
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-6">$19.99</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Interactive online form
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Instant PDF download
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Print at home
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Save money on shipping
                </li>
              </ul>
              <button
                onClick={() => setSelectedOption('download')}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Fill Out Online
              </button>
            </div>
          </div>

          {/* Option 3: Fill & Post */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fill & Post</h3>
              <p className="text-gray-600 mb-6">
                Complete online and well print your will on premium paper and post it directly to your address
              </p>
              <div className="text-3xl font-bold text-purple-600 mb-6">$39.99</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Interactive online form
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Professional printing
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Posted to your address
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">✓</span>
                  Premium paper quality
                </li>
              </ul>
              <button
                onClick={() => setSelectedOption('postal')}
                className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Fill & Ship to Me
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose FreeWill.ltd?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Legally Valid</h4>
              <p className="text-gray-600 text-sm">Our forms meet all legal requirements for a valid Last Will and Testament</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Easy to Use</h4>
              <p className="text-gray-600 text-sm">Simple step-by-step process that anyone can complete in minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure & Private</h4>
              <p className="text-gray-600 text-sm">Your personal information is protected with bank-level security</p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-4xl mx-auto">
            <strong>Legal Notice:</strong> This service provides template forms and is not a substitute for legal advice. 
            For complex estates or specific legal questions, please consult with a qualified attorney. 
            Ensure your will is properly witnessed and executed according to your local laws.
          </p>
        </div>
      </main>
    </div>
  );
};

export default FreeWillWebsite;